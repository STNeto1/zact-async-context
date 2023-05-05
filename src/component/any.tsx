"use client";

import { useZact } from "zact/client";
import { validatedAction } from "~/app/action";

export const AnyForm = () => {
  const { mutate, isLoading, data, error } = useZact(validatedAction);

  return (
    <>
      <button
        onClick={() =>
          mutate({
            stuff: "hello",
          })
        }
      >
        <span className="text-2xl">Click me</span>
      </button>
      {isLoading && <div>Loading...</div>}

      {data && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
      {error && (
        <pre>{JSON.stringify({ error: error.message }, undefined, 2)}</pre>
      )}
    </>
  );
};
