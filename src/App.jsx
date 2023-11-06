import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import FakeStore from "./fakeStrore/FakeStrore";
// import TodoApp from "./TodoApp";
// import Counter from "./Counter";
// import Timer from "./Timer";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/fakestore" element={<FakeStore />} />
          {/* <Route path="/todoapp" element={<TodoApp />} /> */}
          {/* <Route path="/counter" element={<Counter />} /> */}
          {/* <Route path="/timer" element={<Timer />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
