import React from 'react';

const MemberInfoList = ({ infoTable }) => {
  return (
    <>
      {infoTable ? (
        <ul>
          {infoTable.forEach((infoLine, index) => {
            return <li key={index}>{infoLine}</li>;
          })}
        </ul>
      ) : (
        <p>-</p>
      )}
    </>
  );
};

export default MemberInfoList;
