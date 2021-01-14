import bent from "bent";
import { option } from "../option";

export const req = async (path, props = {}) => {
  const { body, header } = props;
  return await bent(
    option.api,
    "string",
    "POST",
    "json",
    200
  )(path, body, header);
};
