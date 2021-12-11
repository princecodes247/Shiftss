// import logo from './logo.svg';
import React, {useState, useRef} from 'react';
import { toPng } from 'dom-to-image';
import { saveAs } from 'file-saver';
import './App.css';
import logo from './lloyd.svg';
import './style.css';
import './materialize.min.css';

function Home() {
  
  let defaultDetails = {
    bankName: "Lloyd",
    accNumber: "1122334455",
    beneficaryAccNumber: "6677889900",
    sender: "John Doe",
    currency: "₦",
    amount: "1000",
    beneficary: "Jane Doe",
    beneficaryBank: "Polaris",
    transDate: new Date().getDate(),
    transTimeZone: "GMT",
    transTime: new Date().getHours()+":"+new Date().getMinutes()+"PM",
    transType: "Transfer",
  }
  const [bankName, setBankName] = useState(defaultDetails.bankName);
  const [senderName, setSenderName] = useState(defaultDetails.sender);
  const [accNumber, setAccNumber] = useState(defaultDetails.accNumber);
  const [beneficaryAccNumber, setBeneficaryAccNumber] = useState(defaultDetails.beneficaryAccNumber);
  const [amount, setAmount] = useState(defaultDetails.amount);
  const [beneficary, setBeneficary] = useState(defaultDetails.beneficary);
  const [beneficaryBank, setBeneficaryBank] = useState(defaultDetails.beneficaryBank);
  const [transDate, setTransDate] = useState(defaultDetails.transDate);
  const [transTime, setTransTime] = useState(defaultDetails.transTime);
  const [transTimeZone, setTransTimeZone] = useState(defaultDetails.transTimeZone);
  const [currency, setCurrency] = useState(defaultDetails.currency);
  const [transType, setTransType] = useState(defaultDetails.transType);
  const [transDesc, setTransDesc] = useState("Sent From Lloyd");
  // Remark Creator
  const [remarkStyle, setRemarkStyle] = useState("2");
  const [remark, setRemark] = useState("Sent From Lloyd");
  const [remarkList, setRemarkList] = useState([]);
  function remarkCreator(value) {

    let str = "";
    // if (remarkStyle === "2") {
    //   return params.value;
    // } else if (remarkStyle === "1") {
    //   return "Trf/Mee/" + params.value+"/" + beneficaryBank + "/Lloyd";
    // } 
    switch (remarkStyle) {
      case "1":
        str = `Trf/Mee/${accNumber}/${value}/${beneficaryBank}/Lloyd`;
        break;
      case "2":
        str = value
        break;
      case "3":
        break;
      default:
        break;
    }
    return str;
  }
  //Check Linkify React code
  function accountNumber(num) {
    //Check if num is a number then add it to the account number state
    if (num) {
      
    }
  }
  function formatAndSetAmount(x) {
    x = x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    setAmount(x)
  }
  
  
  const ref = useRef()
  function saveReceipt() {

    toPng(ref.current, { bgColor: "white", style:{background: "white"}}).then(url => {
      let s = new Date().valueOf().toString(36).substr(-1, 2) + Math.random().toString(36).substr(-1, 2)
      saveAs(url,  `Report${s}.png`)
    })
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>
     <main>
    <div className="row">
        
      <form className="col s12 m4 l6">
     
        <div className="row">
          <div className="input-field col s6">
            <input  id="sender_name" value={senderName} onChange={e=>setSenderName(e.target.value)} type="text" className="validate"/>
            <label for="sender_name">Sender Name</label>
          </div>
          
            <div className="input-field col s6">
              <input  id="beneficiary" value={beneficary}  onChange={e=>setBeneficary(e.target.value)}  type="text" className="validate"/>
              <label for="beneficiary">Beneficiary</label>
            </div>
           
          
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input  id="acc_number" value={accNumber}  onChange={e=>setAccNumber(e.target.value)} type="text" className="validate"/>
            <label for="acc_number">Account Number</label>
          </div>
          </div>
        <div className="row">
          <div className="input-field col s7">
            <input  id="acc_number" value={beneficaryAccNumber}  onChange={e=>setBeneficaryAccNumber(e.target.value)} type="text" className="validate"/>
            <label for="acc_number">Beneficary Account Number</label>
          </div>
          <div className="input-field col s5">
            {/* <select onChange={e => setBeneficaryBank(e.target.value)}>
              <option defaultValue="Access Bank" selected>Access Bank</option>
              <option defaultValue="Access Bank" >Access Bank (Diamond)</option>
              <option defaultValue="FCMB" >FCMB</option>
              <option defaultValue="Polaris Bank" >Polaris Bank</option>

            </select> */}
            <input  id="beneficiary" value={beneficaryBank}  onChange={e=>setBeneficaryBank(e.target.value)}  type="text" className="validate"/>
            <label htmlFor="trans_type">Beneficiary Bank Name</label>
          </div>
         
        </div>
        <div className="row">
        <div className="input-field col s4">
          {/* <select value={currency} onChange={e=>setCurrency(e.target.value)}>
            <option value="" disabled selected>Choose your option</option>
            <option value="₦">Naira ₦</option>
            <option value="$">Dollar $</option>
            <option value="£">Pound £</option>
          </select> */}
          <input  id="currency" value={currency} onChange={e=>setCurrency(e.target.value)} className="validate"/>
          <label for="currency">Currency</label>
        </div>
        
          <div className="input-field col s8">
            <input  id="amount" onChange={e=>formatAndSetAmount(e.target.value)}  type="number" className="validate"/>
            <label for="amount">Amount</label>
          </div>
        </div>

        <div className="row">
          
          <div className="input-field col s12">
            <select onChange={e=>setTransType(e.target.value)} defaultValue="1">
              <option value="" disabled>Choose your option</option>
              <option value="TRANSFER">TRANSFER</option>
              <option value="Withdrawal">Withdrawal</option>
              <option value="Deposit">Deposit</option>
            </select>
            <label for="trans_type">Transaction Type</label>
          </div>
        </div>

        <div className="row">
          
            <div className="input-field col s3">
              <select onChange={e => setRemarkStyle(e.target.value)}>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">TRF/Mee/</option>
                <option value="2" selected>None</option>
                <option value="3"></option>
              </select>
              <label>Remark Style</label>
            </div>
          
          <div className="input-field col s9">
            <input  id="reference" value={transDesc} onChange={e => setTransDesc(e.target.value)} type="text" className="validate"/>
            <label for="reference">Transaction Reference</label>
          </div>
         
        </div>
        <div className="row">
          <div className="input-field col s2">
            <select value={transTimeZone} onChange={e => setTransTimeZone(e.target.value)}>
              <option value="" disabled selected>Choose your option</option>
              <option value="WAT">West African Time (WAT)</option>
              <option value="UTC">Universal (UTC)</option>
              <option value="GMT">Global (GMT)</option>
              <option value="PT">Pacific Time (PT)</option>
            </select>
            <label for="Tformat">Time Format</label>
          </div>
          <div className="input-field col s5">
              
          <input type="text" onSelect={e=>setTransDate(e.target.value)} className="datepicker"/>
  
              <label for="date">Transaction Date</label>
          </div>
          <div className="input-field col s5">
              
              <input type="text" onSelect={e=>setTransTime(e.target.value)} className="timepicker"/>
      
                  <label for="time">Transaction Time</label>
              </div>
        </div>
               <div className="row">
          <div className="input-field col s12">
            <input value={transDesc} onChange={e=>setTransDesc(e.target.value)} id="description" type="text" className="validate"/>
            <label for="description">Transaction Description</label>
          </div>
         
        </div>
      <button type="button" onClick={saveReceipt}>Save as Picture</button>
      </form>
    
   
  
  <section className="col s12 m8 l6 output">
    <div ref={ref} className="receipt">
    <br/>
        <br/>
        <br/>
      <div className="top">
        <div className="logo">
        <img src={logo} alt="React Logo" />
        </div>
        <p className="sub">Transaction details</p>
         </div>
       <div className="intro">
           <p>{senderName}</p>
           <p>Account Number: {accNumber}</p>
       </div>
       <br/>
        <br/>
        <br/>
        <ul className="info">
          <li>
            <p>Transaction Amount</p>
            <p>{currency}{amount}</p>
        </li>
        <li>
          <p>Transaction Type</p>
          <p>{transType}</p>
      </li>
      <li>
        <p>Transaction Date</p>
        <p>{transDate}  {transTime} {transTimeZone}</p>
    </li>
         <li>
                <p>To</p>
                <p>{beneficaryAccNumber}</p>
            </li>
         

            
            <li>
                <p>Details</p>
                <p>{beneficary}    {beneficaryBank}</p>
            </li>
            <li>
                <p>Fees</p>
                <p>{currency}0.00</p>
            </li>
            <li>
                <p>Description</p>
                <p>{remarkCreator(transDesc)}</p>
            </li>
            <li>
                <p>Transaction ID</p>
                <p>{(Date.now())*(Math.floor(Math.random()*10)+1)}</p>
            </li>
       
        </ul>
        <br/>
        <br/>
        <br/>
        <div className="credits">
          <br/>
          
          <p>
            If you have any questions or would like more information
          </p>
          <p >{bankName} Bank RC278434, 
              Rights Reserved, 
              {bankName} Bank. 
              Lincensed by the Federal Reserve.
               {bankName} are trademarks of {bankName} techlogies TD 29-11 
               
           </p>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
  </section>
  </div>
     </main>
    </div>
  );
}

export default Home;
