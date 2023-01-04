import { LoadingQuote } from "../componets/LoadingQuote";
import { Quote } from "../componets/Quote";
import { useFetch, useCounter } from "../hooks";

export const MultipleCustomHooks = () => {
  const { counter, handleSuma, handleResta, handleReset } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>breacking quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button className="btn btn-primary" onClick={handleSuma}>
        next quote
      </button>

      <button className="btn btn-primary" onClick={handleResta}>
        back quote
      </button>

      <button
        className="btn btn-primary"
        onClick={handleReset}
        disabled={isLoading}
      >
        rest quote
      </button>
    </>
  );
};
