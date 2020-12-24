import { useState } from "react";
import { Input } from "../";

export default function Search({ invert, ...props }) {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
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
        <Input.Addon type="button" variant="primary" arial-label="search">
          <i className="far fa-search"></i>
        </Input.Addon>
      </Input.Group>
    </form>
  );
}
