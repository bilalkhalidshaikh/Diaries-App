import React, { FC } from 'react';
import Diaries from '../diary/Diaries';
import Editor from '../entry/Editor';

const Home: FC = () => {
  return (
    <div className="two-cols" style={{
      backgroundImage:" linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
      backgroundBlendMode: "multiply,multiply"
  }}>
      <div className="left">
        <Diaries />
      </div>
      <div className="right">
        <Editor />
      </div>
    </div>
  );
};

export default Home;