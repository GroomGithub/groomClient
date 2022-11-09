import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetDetailWithRoomIdResponse = GroomApiResponse<
  Room & {
    roomParticipants: {
      id: number;
      nickname: string;
      profileImageUrl: string;
    }[];
  }
>;

type GetDetailWithRoomId = (
  roomId: number
) => Promise<GetDetailWithRoomIdResponse>;

const getDetailWithRoomId: GetDetailWithRoomId = async (roomId: number) => {
  const { data } = await customAxios.get(`/room/${roomId}`);
  return data;
};

const useGetDetailWithRoomId = (roomId: number) =>
  useQuery(['getDetail', roomId], () => getDetailWithRoomId(roomId), {
    select: (data) => data.data,
    enabled: roomId !== 0
  });

export default useGetDetailWithRoomId;
