import React from 'react';

const MemberInfoList = ({ list }) => {
  return (
    <>
      {list.length > 1 ? (
        <ul>
          {list.map((infoLine, index) => {
            return <li key={index}>{infoLine}</li>;
          })}
        </ul>
      ) : list.length === 1 ? (
        <p>{list[0]}</p>
      ) : (
        <p>-</p>
      )}
    </>
  );
};

export default MemberInfoList;
