import React from 'react';

function MyDatePicker({ startDate, endDate, setDateRange }) {
  return (
    <div>
      <MyDatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={update => {
          setDateRange(update);
        }}
      />
    </div>
  );
}

export default MyDatePicker;
