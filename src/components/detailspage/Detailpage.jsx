import React from 'react'
import EnCurrencyCh from '../encurrencychange/EnCurrencyCh';
import EnInfo from "../encyinfo/EnInfo";
import EnDetail from '../endetail/EnDetail';
import EnStat from '../enstat/EnStat'

const Detailpage = () => {
  return (
    <div>
      <EnInfo />
      <div>
        <EnCurrencyCh />

        <EnDetail  />
      </div>

      <EnStat />
    </div>
  );
}

export default Detailpage