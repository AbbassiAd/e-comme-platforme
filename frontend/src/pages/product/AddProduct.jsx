import {
  useCreateProductMutation,
  useUploadProductImageMutation,
} from "../../redux/api/productApiSlice.js";
import { useGetAllCategoriesQuery } from "../../redux/api/categoryApiSlice.js";
import { useNavigate } from "react-router";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { toast } from "react-toastify";
import Navigation from "../Navigation.jsx";

const AddProduct = () => {
  const navigate = useNavigate();
  const [createProduct] = useCreateProductMutation();
  const { data: categories } = useGetAllCategoriesQuery();
  const [uploadProductImage] = useUploadProductImageMutation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const handleUpload = async (e,imageNumber) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      console.log(res);
      if (imageNumber === 1) {
        setImage1(res.image);
      } else if (imageNumber === 2) {
        setImage2(res.image);
      } else if (imageNumber === 3) {
        setImage3(res.image);
      }
     
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };
 


  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct({
        name,
        description,
        price,
        quantity,
        category,
        countInStock,
        brand,
       images:{
        image1,
        image2,
        image3,
       }
      }).unwrap();
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(`${res.name} created successfully`);
        navigate("/admin");
      }
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
    if (!image1 ) {
      toast.error("Veuillez ajouter au moin un images.");
      return;
    }
  
  };
  
  
  return (
    <>
    <Navigation />
      <div className="flex justify-center items-center h-[96vh]">
      <div className="relative w-[1250px] flex flex-row h-[700px] bg-white rounded shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">
        <div
          className="absolute top-3 right-3 text-gray-400 cursor-pointer size-3 "
          onClick={() => navigate(-1)}
        >
          <IoMdClose />
        </div>
       

        <div className="bg-gray-100 h-full w-[430px]">
  <div className="flex flex-col justify-center items-center">
    {image1 ? (
      <img
        src={image1}
        
        className="h-[150px] w-[200px] transform transition duration-300 hover:scale-[1.02] mt-10 text-gray-300"
      />
    ) : (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hfBadbN0vYkhw9xn4BSxibyfEVTinJLa5XYGyUAOXZl5eBxXpbCaZpFENwRkcjS2WRM&usqp=CAU"
        className="h-[150px] w-[200px] transform transition duration-300 hover:scale-[1.02] mt-10 text-gray-300 object-cover"
      />
    ) }
     <input
      type="file"
      name="image1"
      accept="image/*"
      onChange={(e) => {
        handleUpload(e, 1);
        setImage1((prevImage1) => {
          console.log(image1); 
          return prevImage1;
        });
      }}
      id="input-file1"
      hidden
    />

    <label
      htmlFor="input-file1"
      className="mt-2 bg-black text-white w-[250px] rounded hover:bg-gray-900 h-[30px] justify-center flex items-center cursor-pointer"
    >
      ADD IMAGE PRODUCT 1
    </label>

   

    {image2 ? (
      <img
        src={image2}
        className="h-[150px] w-[200px] transform transition duration-300 hover:scale-[1.02] mt-10 text-gray-300"
      />
    ) : (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hfBadbN0vYkhw9xn4BSxibyfEVTinJLa5XYGyUAOXZl5eBxXpbCaZpFENwRkcjS2WRM&usqp=CAU"
        className="h-[150px] w-[200px] transform transition duration-300 hover:scale-[1.02] mt-10 text-gray-300 object-cover"
      />
    )}

    <label
      htmlFor="input-file2"
      className="mt-2 bg-black text-white w-[250px] rounded hover:bg-gray-900 h-[30px] justify-center flex items-center cursor-pointer"
    >
      ADD IMAGE PRODUCT 2
    </label>

    <input
      type="file"
      name="image2"
      accept="image/*"
      onChange={(e) => handleUpload(e, 2)}
      id="input-file2"
      hidden
    />
 
    {image3 ? (
      <img
        src={image3}
        className="h-[150px] w-[200px] transform transition duration-300 hover:scale-[1.02] mt-10 text-gray-300"
      />
    ) : (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2hfBadbN0vYkhw9xn4BSxibyfEVTinJLa5XYGyUAOXZl5eBxXpbCaZpFENwRkcjS2WRM&usqp=CAU"
        className="h-[150px] w-[200px] transform transition duration-300 hover:scale-[1.02] mt-10 text-gray-300 object-cover"
      />
    )}

    <label
      htmlFor="input-file3"
      className="mt-2 bg-black text-white w-[250px] rounded hover:bg-gray-900 h-[30px] justify-center flex items-center cursor-pointer"
    >
      ADD IMAGE PRODUCT 3
    </label>

    <input
      type="file"
      name="image3"
      accept="image/*"
      onChange={(e) => handleUpload(e, 3)}
      id="input-file3"
      hidden
    />
  </div>
</div>

        <div className="bg-white h-full w-[830px]">
          <form className="m-6 mt-[3rem]" onSubmit={handleAdd}>
            <h2 className="text-2xl font-medium mb-2">PRODUCT DETAILS</h2>

            <label className="text-gray-500">product name: *</label>
            <input
              type="text"
              placeholder="product name"
              className="w-[100%] h-[40px] mt-1 pl-2 outline-none bg-gray-100 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="text-gray-500">description: *</label>
            <textarea
              rows="3"
              type="text"
              placeholder="description"
              className="w-[100%] mt-1 pl-2 outline-none bg-gray-100 rounded resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label className="text-gray-500">price: *</label>
            <input
              type="number"
              placeholder="price"
              className="w-[100%] h-[40px] mt-1 pl-2 outline-none bg-gray-100 rounded"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label className="text-gray-500">quantity: *</label>
            <input
              type="number"
              placeholder="quantity"
              className="w-[100%] h-[40px] mt-1 pl-2 
              outline-none bg-gray-100 rounded"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <label className="text-gray-500">category: *</label>
            <select
              type="text"
              placeholder="category"
              className="w-[100%] h-[40px] mt-1 px-2 outline-none bg-gray-100 rounded"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" defaultValue={""} disabled>
                --select category--
              </option>

              {categories?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <label className="text-gray-500">count in stock: *</label>
            <input
              type="number"
              placeholder="count in stock"
              className="w-[100%] h-[40px] mt-1 pl-2 outline-none bg-gray-100 rounded"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
            />

            <label className="text-gray-500">brand: *</label>
            <input
              type="text"
              placeholder="brand"
              className="w-[100%] h-[40px] mt-1 pl-2 outline-none bg-gray-100 rounded"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
             <button
              className=" mt-6 bottom-[100px] bg-black text-white w-[300px] rounded hover:bg-gray-900 h-[50px]"
              onClick={handleAdd}
            >
              CREATE NEW PRODUCT
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  ); 
  
  
  
};

export default AddProduct;
