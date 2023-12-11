'use server';

// CREATE INVOICES =========================================
export async function createInvoice(formData: FormData) {
  // if you have many fields 
  // const rawFormData = Object.fromEntries(formData.entries())
  
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log(rawFormData);
}
