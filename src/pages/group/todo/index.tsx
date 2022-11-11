import { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { Avatar } from '../../../components/atoms';
import { GroupPage } from '../../../components/templates';
import useGetDetailWithRoomId from '../../../hooks/api/room/getDetailWithRoomId';
import useRoomIdParams from '../../../hooks/useRoomIdParams';
import colors from '../../../styles/colors';
import { medium12, regular16, semiBold16 } from '../../../styles/typography';

type TodoColorKeys = keyof typeof colors.toDoColor;

type TodoColorProps = 'red' | 'green' | 'gray';

type TOdoBoardData = {
  color: TodoColorProps;
  title: string;
  description: string;
}[];

type Todo = {
  id: number;
  title: string;
  content: string;
  nickname: string;
  profileImage: string;
  roomSlot: 'todo' | 'doing' | 'done';
};

// const TODOS_MOCK: Todos[] = [];

const TODOS_MOCK = [
  // {
  //   id: 0,
  //   title: '하기 전 일1',
  //   content: 'string',
  //   nickname: 'string',
  //   profileImage: 'string',
  //   roomSlot: 'todo' as const
  // },
  {
    id: 1,
    title: '하는 중 일2',
    content: 'string',
    nickname: 'string',
    profileImage: 'string',
    roomSlot: 'doing' as const
  },
  {
    id: 2,
    title: 'string',
    content: 'string',
    nickname: 'string',
    profileImage: 'string',
    roomSlot: 'doing' as const
  },
  {
    id: 3,
    title: '다 한 일',
    content: 'string',
    nickname: 'string',
    profileImage: 'string',
    roomSlot: 'done' as const
  },
  // {
  //   id: 4,
  //   title: 'string',
  //   content: 'string',
  //   nickname: 'string',
  //   profileImage: 'string',
  //   roomSlot: 'todo' as const
  // },
  {
    id: 5,
    title: 'string',
    content: 'string',
    nickname: 'string',
    profileImage: 'string',
    roomSlot: 'done' as const
  }
];

const TODO_BOARD_DATA: TOdoBoardData = [
  {
    color: 'red',
    title: '하기 전',
    description: '터치해서 할 일을 만들어보세요.'
  },
  {
    color: 'green',
    title: '하는 중',
    description: '진행 중인 할 일이 없습니다.'
  },
  {
    color: 'gray',
    title: '끝난 일',
    description: '완료된 할 일이 없습니다.'
  }
];

const SubTitle = styled.h2`
  ${semiBold16};
  margin-bottom: 16px;
  color: ${colors.grayScale.gray04};
`;

const TodoTitle = styled.h2<{ color: TodoColorProps }>`
  ${medium12}
  display: block;
  margin-bottom: 8px;
  color: ${({ color }) => colors.toDoColor[`${color}Text` as TodoColorKeys]};
`;

const TodoDescription = styled.span`
  ${medium12}
  display: block;
  padding: 16px;
  text-align: center;
  color: ${colors.grayScale.gray03};
`;

const TodoBoardContainer = styled.div<{ color: TodoColorProps }>`
  box-sizing: border-box;
  min-height: 110px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: ${({ color }) =>
    colors.toDoColor[`${color}Light` as TodoColorKeys]};
  border: 1px solid ${({ color }) => colors.toDoColor[color as TodoColorKeys]};
  border-radius: 8px;

  &:last-of-type {
    margin-bottom: 39px;
  }
`;

const TodoItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-bottom: 8px;
  padding: 12px 16px;
  background-color: ${colors.grayScale.white};
  border-radius: 8px;
`;

const TodoOwnerAvatar = styled(Avatar)`
  margin-right: 12px;
`;

const TodoOwnerName = styled.span`
  ${medium12};
  display: block;
  margin-bottom: 1px;
  color: ${colors.grayScale.gray03};
`;

const TodoName = styled.span`
  ${regular16}
  color: ${colors.grayScale.gray05};
`;

type TodoBoardProps = {
  color: TodoColorProps;
  title: string;
  description: string;
  todos: Todo[];
};

const TodoInput = styled.input`
  ${regular16};
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 8px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  color: ${colors.grayScale.gray05};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${colors.grayScale.gray03};
  }
`;

const TodoBoard = ({ color, title, description, todos }: TodoBoardProps) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const filteredTodos = getTodoData(todos, color);
    setFilteredTodos(filteredTodos);
  }, [todos, color]);

  const getTodoData = (todos: Todo[], color: TodoColorProps) => {
    const filterdTodo = todos.filter(({ roomSlot }) => {
      if (color === 'red') return roomSlot === 'todo';
      if (color === 'green') return roomSlot === 'doing';
      return roomSlot === 'done';
    });

    return filterdTodo;
  };

  return (
    <TodoBoardContainer key={title} color={color}>
      <TodoTitle color={color}>{title}</TodoTitle>
      {filteredTodos.length
        ? filteredTodos.map(({ id, title, profileImage, nickname }) => (
            <TodoItemContainer key={id}>
              <TodoOwnerAvatar proptype="image" src={profileImage} />
              <div>
                <TodoOwnerName>{nickname || '담당자 없음'}</TodoOwnerName>
                <TodoName>{title}</TodoName>
              </div>
            </TodoItemContainer>
          ))
        : color === 'red' || <TodoDescription>{description}</TodoDescription>}
      {color === 'red' && (
        <TodoInput
          placeholder="할 일이 있나요?"
          type="text"
          value={todoTitle}
          onChange={({ target: { value } }) => setTodoTitle(value)}
          onKeyDown={({ key, nativeEvent: { isComposing } }) => {
            if (!todoTitle || isComposing) return;
            if (key === 'Enter') {
              setFilteredTodos((pre) => [
                ...pre,
                {
                  id: 10,
                  title: todoTitle,
                  content: '',
                  nickname: '',
                  profileImage: '',
                  roomSlot: 'todo'
                }
              ]);
              setTodoTitle('');
            }
          }}
        />
      )}
    </TodoBoardContainer>
  );
};

const Todo = () => {
  const roomId = useRoomIdParams();
  const {
    data: groupDetail,
    isLoading: isGroupDetailLoading,
    isError: isGroupDetailError
  } = useGetDetailWithRoomId(roomId);

  if (isGroupDetailLoading) return <div>그룹 상세 로딩중...</div>;
  if (isGroupDetailError) return <div>그룹 상세 로딩 에러!</div>;
  if (groupDetail === undefined) return <div>그룹 상세 데이터 오류!</div>;

  return (
    <GroupPage
      roomId={roomId}
      groupName={groupDetail.name}
      selectedTabIndex={2}
      // TODO: TabIndex constant로 빼기
    >
      {/* TODO: 할 일 서랍 만들어지면 SubTitle 빼기 */}
      <SubTitle>할 일 보드</SubTitle>
      {TODO_BOARD_DATA.map(({ color, title, description }) => (
        <TodoBoard
          key={color}
          todos={TODOS_MOCK}
          {...{ color, title, description }}
        />
      ))}
    </GroupPage>
  );
};

export default Todo;
