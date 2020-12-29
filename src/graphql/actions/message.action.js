import { useMutation } from "@apollo/client";
import { NEW_MESSAGE } from "../queries/message.query";

export const useCreateMessage = (options) => useMutation(NEW_MESSAGE, options);
