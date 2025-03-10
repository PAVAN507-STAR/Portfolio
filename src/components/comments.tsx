"use client";

import Giscus, { GiscusProps } from "@giscus/react";

interface CommentsProps {
  giscusConfig: GiscusProps;
}

function Comments({ giscusConfig }: CommentsProps) {
  return (
    <Giscus {...giscusConfig} />
  );
}

export default Comments;
