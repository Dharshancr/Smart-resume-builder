import React, { useState } from 'react';
import jsPDF from 'jspdf';
const ResumeForm = () => {
 const [formData, setFormData] = useState({
   fullName: '',
   email: '',
   phone: '',
   skills: '',
 });
 const generatePDF = () => {
   const doc = new jsPDF();
   doc.text(`Resume`, 20, 20);
   doc.text(`Name: ${formData.fullName}`, 20, 30);
   doc.text(`Email: ${formData.email}`, 20, 40);
   doc.text(`Phone: ${formData.phone}`, 20, 50);
   doc.text(`Skills: ${formData.skills}`, 20, 60);
   doc.save("resume.pdf");
 };
 return (
   <div>
     <h2>Resume Builder</h2>
     <input type="text" placeholder="Full Name" onChange={(e) => setFormData({ ...formData, 
fullName: e.target.value })} />
     <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, 
email: e.target.value })} />
     <input type="text" placeholder="Phone" onChange={(e) => setFormData({ ...formData, 
phone: e.target.value })} />
<input type="text" placeholder="Skills (comma separated)" onChange={(e) => 
setFormData({ ...formData, skills: e.target.value })} />
     <button onClick={generatePDF}>Download PDF</button>
</div>
 );
};
export default ResumeForm;