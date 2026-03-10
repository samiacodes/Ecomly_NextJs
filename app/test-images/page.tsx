export default async function TestImages() {
  // Test direct API call
  const response = await fetch('https://admin.prothomashop.com/api/category/51/products', {
   next: { revalidate: 60 }
  });
  
  const data = await response.json();
  
  let products = [];
  if (data.success && data.result?.products) {
   products = data.result.products;
  }
  
 return (
    <div className="min-h-screen bg-white p-8">
     <h1 className="text-3xl font-bold mb-8">Product Image Test</h1>
     
     <div className="mb-8">
       <h2 className="text-xl font-semibold mb-4">API Response Info</h2>
       <p>Success: {data.success ? 'Yes' : 'No'}</p>
       <p>Total Products: {products.length}</p>
     </div>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       {products.slice(0, 8).map((product: any) => {
        const imageUrl = `https://admin.prothomashop.com/public/uploads/products/${product.image}`;
         
        return (
          <div key={product.id} className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-500 mb-2">Image filename: {product.image}</p>
            <img 
             src={imageUrl} 
             alt={product.title}
             className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-xs text-gray-400 break-all">{imageUrl}</p>
           </div>
         );
       })}
     </div>
    </div>
  );
}
