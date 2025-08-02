import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTicket, getTickets } from "@/lib/api/tickets";
import Ticket from "@/lib/types/ticket";

export const useTicketsQuery = () =>
  useQuery({
    queryKey: ["tickets"],
    queryFn: () => getTickets(),
  });

export const useCreateTicketsQuery = () => {
  const client = useQueryClient();

  return useMutation<Ticket, Error, Partial<Ticket>>({
    mutationFn: (Ticket) => createTicket(Ticket),
    onSuccess: () =>
      client.invalidateQueries({
        queryKey: ["tickets"],
      }),
  });
};
