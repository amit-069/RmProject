import { useState, useRef } from "react"
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import Table from "./components/Table"
import Header from "./components/Header"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientDetails"
import Dates from "./components/Dates"
import TableForm from "./components/TableForm"
import ReactToPrint from "react-to-print"


function App() {
  const [showInvoice,setShowInvoice]=useState(true)

  const [name,setName]=useState("Amit Maurya")
  const [address,setAddress]=useState("Gorakhpur,Uttar Pradesh")
  const [email,setEmail]=useState("xyzabc@gmail.com")
  const [phone,setPhone]=useState("9988112233")
  const [bankName,setBankName]=useState("Noo bank")
  const [bankAccount,setBankAccount]=useState("123 456 7809")
  const [website,setWebsite]=useState("www.inovicer.com")
  const [clientName,setClientName]=useState("John")
  const [clientAddress,setClientAddress]=useState("Agartal,Tripura")
  const [invoiceNumber,setInvoiceNumber]=useState("2025")
  const [invoiceDate,setInvoiceDate]=useState("30/09/2024")
  const [dueDate,setDueDate]=useState("10/10/2024")
  const [notes,setNotes]=useState("Pay to the bank account indicated above")
  const [description,setDescription]=useState("")
  const [quantity, setQuantity]=useState("")
  const [price,setPrice]=useState("")
  const [amount, setAmount]=useState("")
  const [list,setList]=useState([])
  const [total, setTotal]= useState(0)
 
  const componentRef = useRef()

  const handlePrint=()=>{
    window.print()
  }
  

  return (
    <>
    <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
      {/* <ReactToPrint trigger={() => <button>Print / Download</button>} 
      content={() => componentRef.current}
       /> */}
      {showInvoice ? (
      <div >
      <Header handlePrint={handlePrint} />
     <MainDetails name={name} address={address}/>
     
     <ClientDetails 
     clientName={clientName}
     clientAddress={clientAddress}/>
      <Dates
      invoiceNumber={invoiceNumber}
      invoiceDate={invoiceDate}
      dueDate={dueDate}/>
      <Table description={description}
      quantity={quantity}
      price={price}
      amount={amount}
      list={list}
      setList={setList}
      total={total}
      setTotal={setTotal}
      />
      <Notes 
      notes={notes}/>

      <Footer 
      name={name}
      address={address}
      website={website}
      email={email}
      bankAccount={bankAccount}
      bankName={bankName}
      phone={phone}
      />
      <button 
      onClick={()=>setShowInvoice(false)}
      className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
      </div>):(
       <>
       {/*name,address,email,phone,bank name,bank account number,website client name,client address,invoice number,invoice date,due date,notes */}
       <div className="flex flex-col justify-center">
         <label htmlFor="name">Enter your name</label>
       <input type="text"
        name="text"
        id="text"
        placeholder="Enter your name"
        autoComplete="off"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

      <label htmlFor="address">Enter your address</label>
       <input type="text"
        name="text"
        id="address"
        placeholder="Enter your address"
        autoComplete="off"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        />
       
       <label htmlFor="email">Enter your email</label>
       <input type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        autoComplete="off"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
       
       <label htmlFor="website">Enter your website</label>
       <input type="url"
        name="website"
        id="website"
        placeholder="Enter your website"
        autoComplete="off"
        value={website}
        onChange={(e)=>setWebsite(e.target.value)}
        />
        
        <label htmlFor="phone">Enter your phone</label>
       <input type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone"
        autoComplete="off"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        />
      
      <label htmlFor="bankName">Enter your bankName</label>
       <input type="text"
        name="bankName"
        id="bankName"
        placeholder="Enter your bankName"
        autoComplete="off"
        value={bankName}
        onChange={(e)=>setBankName(e.target.value)}bankName
        />
       
       <label htmlFor="bankAccount">Enter your bank account number</label>
       <input type="text"
        name="bankAccount"
        id="bankAccount"
        placeholder="Enter your bank account number"
        autoComplete="off"
        value={bankAccount}
        onChange={(e)=>setBankAccount(e.target.value)}
        />
       
       <label htmlFor="clientName">Enter your client's Name</label>
       <input type="text"
        name="clientName"
        id="clientName"
        placeholder="Enter your client's Name"
        autoComplete="off"
        value={clientName}
        onChange={(e)=>setClientName(e.target.value)}
        />
       
       <label htmlFor="clientAddress">Enter your client's Address</label>
       <input type="text"
        name="clientAddress"
        id="clientAddress"
        placeholder="Enter your client's Address"
        autoComplete="off"
        value={clientAddress}
        onChange={(e)=>setClientAddress(e.target.value)}
        />

<label htmlFor="invoiceNumber">Enter your invoice Number</label>
       <input type="text"
        name="invoiceNumber"
        id="invoiceNumber"
        placeholder="Enter your invoice Number"
        autoComplete="off"
        value={invoiceNumber}
        onChange={(e)=>setInvoiceNumber(e.target.value)}
        />
       
       <label htmlFor="invoiceDate">Enter your invoice Date</label>
       <input type="date"
        name="invoiceDate"
        id="invoiceDate"
        placeholder="Enter your invoice Date"
        autoComplete="off"
        value={invoiceDate}
        onChange={(e)=>setInvoiceDate(e.target.value)}
        />
      
      <label htmlFor="due Date"> Due Date</label>
       <input type="date"
        name="dueDate"
        id="dueDate"
        placeholder=" Due Date"
        autoComplete="off"
        value={dueDate}
        onChange={(e)=>setDueDate(e.target.value)}
        />
       
       {/*This is our table form */}
       <article>
        <TableForm 
        description={description}
        setDescription={setDescription}
        quantity={quantity}
        setQuantity={setQuantity}
        price={price}
        setPrice={setPrice}
        amount={amount}
        setAmount={setAmount}
        list={list}
        setList={setList}
        total={total}
        setTotal={setTotal}
        
        />
       </article>


       <label htmlFor="notes">Additional Notes</label>
       <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Additional notes to the client" value={notes} onChange={(e)=>setNotes(e.target.value)}></textarea>
       
       <button
       onClick={()=>setShowInvoice(true)}
       className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
       </div>
       </>
      ) }
    </main>
    </>
  )
}

export default App
