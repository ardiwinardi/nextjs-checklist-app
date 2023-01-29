import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import checklistService from '../../data/checklist.service';

const onError = (error: Error) =>
  toast.error(error.message, { toastId: 'checklist' });

export const useGetAllChecklist = () => {
  const controller = useQuery({
    queryKey: ['checklist'],
    queryFn: checklistService.getAll,
    onError,
  });

  return controller;
};

export const useCreateChecklist = () => {
  const queryClient = useQueryClient();
  const controller = useMutation({
    mutationFn: checklistService.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['checklist']);
    },
    onError,
  });
  return controller;
};

export const useUpdateChecklist = () => {
  const queryClient = useQueryClient();
  const controller = useMutation({
    mutationFn: checklistService.update,
    onSuccess: () => {
      queryClient.invalidateQueries(['checklist']);
    },
    onError,
  });
  return controller;
};

export const useDeleteChecklist = () => {
  const queryClient = useQueryClient();
  const controller = useMutation({
    mutationFn: checklistService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['checklist']);
    },
    onError,
  });
  return controller;
};
