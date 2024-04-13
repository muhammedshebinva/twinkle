import React from 'react';

const TitleTable = ({ titles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {titles.map(item => (
          <tr key={item.title}>
            <td>{item.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TitleTable;
