import React, { useEffect, useState } from "react";
import axios from "axios";

function Fib() {
  const [state, setState] = useState({
    seenIndexes: [],
    values: {},
    index: "",
  });

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  async function fetchValues() {
    const values = await axios.get("/api/values/current");
    console.log(values);
    setState({ values: values.data });
  }

  async function fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    setState({ seenIndexes: seenIndexes.data });
  }

  const renderSeenIndexes = () => {
    try {
      if (state.seenIndexes) {
        return state.seenIndexes.map(({ number }) => number).join(", ");
      }
    } catch (error) {
      console.error(error);
      return <div>Error rendering values</div>;
    }
  };

  function renderValues() {
    try {
      return Object.entries(state.values).map(([key, value]) => (
        <div key={key}>
          For index {key} I calculated {value}
        </div>
      ));
    } catch (error) {
      console.error(error);
      return <div>Error rendering values</div>;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("/api/values", {
      index: state.index,
    });
    setState({ index: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index: </label>
        <input
          value={state.index}
          onChange={(event) => setState({ index: event.target.value })}
        />
        <button>Submit</button>
      </form>

      <h3>Indexes i have seen: </h3>
      {state.seenIndexes && renderSeenIndexes()}
      {console.log(state)}
      <h3>Calculated values: </h3>
      {state.values && renderValues()}
    </div>
  );
}

export default Fib;
