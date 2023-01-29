import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import checklistService from '../../data/checklist.service';

export const useGetAllChecklist = () => {
  const controller = useQuery({
    queryKey: ['checklist'],
    queryFn: checklistService.getAll,
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
  });
  return controller;
};
