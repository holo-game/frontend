import { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "../";

export default function Search({ invert, ...props }) {
  const { push } = useRouter();
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    push({ pathname: "/games", query: { search: text } });
  };
  return (
    <form onSubmit={onSubmit}>
      <Input.Group {...props}>
        <Input.Control
          type="text"
          value={text}
          invert={invert}
          addon={true}
          onChange={(e) => setText(e.target.value)}
          placeholder="Hansı oyunu axtarırsınız?"
        />
        <Input.Addon type="submit" variant="primary" aria-label="search">
          <i className="far fa-search"></i>
        </Input.Addon>
      </Input.Group>
    </form>
  );
}
