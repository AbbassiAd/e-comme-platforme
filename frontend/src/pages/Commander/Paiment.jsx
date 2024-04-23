import React, { useState } from 'react';
import {  AiOutlineCreditCard } from 'react-icons/ai';
import AddOrdreItems from './AddOrdreItems';
import {  SolutionOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { CheckCircleFill } from 'react-bootstrap-icons';
import Navigation from '../Navigation';
import { totalSelection } from '../../redux/features/cart/Cart';
import { toast } from 'react-toastify'; 
import { useDispatch, useSelector } from 'react-redux';
import CartProduct from './CartProduct';
import UserInformation from './useInformation';
import { useCreateOrdreMutation } from '../../redux/api/OrdreApiSlice';
import { Navigate } from 'react-router';
import { produitsSelectionners } from "../../redux/features/cart/Cart";
import { useCreateOrdreItemsMutation } from "../../redux/api/oredreItemsApiSlice";
const Paiment = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const { userInfo } = useSelector((state) => state.auth);
  const [idUser] = useState(userInfo?._id);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [ordreId,  setOrderId]=useState('');
  const totalPrice = totalSelection ;
  
 

  const [currentStep, setCurrentStep] = useState(1);

  const [createOrdre] = useCreateOrdreMutation();
  const products = produitsSelectionners; 
  

let ordre_id = 2 ;
// ordre Creation --------------------------------------------------------------------------------------------------------
 const createOrdres = async () => {
     
      try {
        const res = await createOrdre({
          
            id_user: idUser,
            cardInfo: {
              paimentMethode: selectedPayment,
              Name_on_card: cardName,
              Card_number: cardNumber,
              Expiry_date: cardExpiration,
              CVV: cardCvv
            },
            total_price: totalPrice
          
          
        }).unwrap();
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success(`${res.name} created successfully`);
          const orderId = res.ordre._id; 
          setOrderId(orderId);
          ordre_id = orderId

          console.log("ID de l'ordre créé :", orderId); // Vérification de la valeur de orderId
          createOrderItems();
        }
      
      } catch (error) {
        toast.error(error?.data?.message || error.message);
      }
     
   
    };
    // ordre Items Creation --------------------------------------------------------
   /*  const [createOrdreItems] = useCreateOrdreItemsMutation(); 
    const createOrderItems = async () => {
    try {
      console.log(products.map((product) => `ID du produit: ${product.id}`));

      const orderItems = products.map((product) => ({
       
        id_product: product.id,
        id_ordre: ordre_id,
        quantity: product.quantity,
        price: product.price,
        total_items_price: (product.quantity * product.price),
      }));

      const res = await createOrdreItems(orderItems);
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(`${res.name} created successfully`);
        console.log('Ordre Items créé avec succès:', JSON.stringify(res, null, 2));
      }
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };
 */
  const [createOrdreItems] = useCreateOrdreItemsMutation();

  const createOrderItems = async () => {
    try {
      // Afficher les produits pour le débogage
      console.log("Produits :", products);
  
      // Créer les objets d'ordreItems à partir des produits
      const orderItems = products.map((product) => ({
        id_product: product.id,
        id_ordre: ordre_id,
        quantity: product.quantity,
        price: product.price,
        total_items_price: product.quantity * product.price,
      }));
  
      // Afficher les ordreItems pour le débogage
      console.log("OrdreItems :", orderItems);
  
      // Envoyer la requête pour créer les ordreItems
      const res = await createOrdreItems(orderItems);
  
      // Vérifier si la requête a échoué
      if (res.error) {
        // Afficher l'erreur pour le débogage
        console.error("Erreur lors de la création des ordreItems :", res.error);
        
        // Afficher un message d'erreur à l'utilisateur
        toast.error(res.error);
      } else {
        // Afficher un message de succès à l'utilisateur
        toast.success("OrdreItems créés avec succès");
  
        // Afficher la réponse pour le débogage
        console.log("Réponse :", res);
      }
    } catch (error) {
      // Afficher l'erreur pour le débogage
      console.error("Erreur lors de la création des ordreItems :", error);
  
      // Afficher un message d'erreur à l'utilisateur
      toast.error(error?.data?.message || error.message);
    }
  };
  
  
  const handlePaymentChange = (paymentType) => {
    setSelectedPayment(paymentType);
  };




    const handleConfirmOrdre = async () => {
      await createOrdres(); 
      setCurrentStep(3); 
    };
    
   
   
   
   
  
  const   handleSubmit=()=>{
    Navigate("/home");
   }
  
    const handleNextStep = () => {
      setCurrentStep(currentStep + 1);
    };
  
  
  return (
    <>
   
   <Navigation />

    <div className="container mx-auto">
    <div className="container mx-auto text-center mt-[30px] mb-[30px]">
  <h1 className="text-3xl font-bold mb-4 text-gray-800">Passer la commande</h1>
</div>


      
      <Steps current={currentStep - 1} className="flex justify-between mb-[30px]">
      <Steps.Step
        title="Verification"
        status={currentStep >= 1 ? 'finish' : 'wait'}
        icon={currentStep === 1 ? <SolutionOutlined className={currentStep === 1 ? "text-blue-500 text-6xl" : "text-gray-500 text-6xl"} /> : null}
      />
      <Steps.Step
        title="Paiement"
        status={currentStep >= 2 ? 'finish' : 'wait'}
        icon={<AiOutlineCreditCard className={currentStep >= 2 ? "text-blue-500 text-6xl" : "text-gray-900 text-6xl"} />}
      />
     
      <Steps.Step
        title="Done"
        status={currentStep >= 3 ? 'finish' : 'wait'}
        icon={<CheckCircleFill className={currentStep >= 4 ? "text-blue-500 text-6xl" : "text-gray-900 text-6xl"} />}
      />
    </Steps>


      {currentStep === 1 && (
     <div className="mb-4">
      <UserInformation/>
      <button onClick={handleNextStep} className="bg-black ml-[380px] hover:bg-black-700 text-white h-[50px] w-[200px] rounded focus:outline-none focus:shadow-outline mt-4">
        Validate Information
      </button>
      <div className='absolute top-[240px] left-[1100px]'>
        <CartProduct />
    
      </div>
    </div>
    



        
      )}

      {currentStep === 2 && (
         <>
  <div className="flex">
    <div className="w-full md:w-3/4 lg:w-1/2">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 lg:p-12">
          <h2 className="text-2xl font-semibold mb-8">Payment Information</h2>
      <form action="">
        <div className="flex justify-center mb-8">
          <div className="flex items-center mr-6 cursor-pointer" onClick={() => handlePaymentChange('credit')}>
            <img className="h-12 w-12 mr-2" src="https://i.imgur.com/WIAP9Ku.jpg" alt="Credit Card" />
            <p className={`text-lg ${selectedPayment === 'credit' ? 'text-black' : 'text-gray-400'}`}>Credit Card</p>
          </div>
          <div className="flex items-center mr-6 cursor-pointer" onClick={() => handlePaymentChange('debit')}>
            <img className="h-12 w-12 mr-2" src="https://i.imgur.com/OdxcctP.jpg" alt="Debit Card" />
            <p className={`text-lg ${selectedPayment === 'debit' ? 'text-black' : 'text-gray-400'}`}>Debit Card</p>
          </div>
          <div className="flex items-center cursor-pointer" onClick={() => handlePaymentChange('paypal')}>
            <img className="h-12 w-12 mr-2" src="https://i.imgur.com/cMk1MtK.jpg" alt="PayPal" />
            <p className={`text-lg ${selectedPayment === 'paypal' ? 'text-black' : 'text-gray-400'}`}>PayPal</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-semibold">Name on Card</label>
            <input type="text" id="cname" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardName} onChange={(e)=>setCardName(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Card Number</label>
            <input type="text" id="cnum" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Expiration Date</label>
            <input type="date" id="exp" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardExpiration} onChange={(e)=>setCardExpiration(e.target.value)} />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">CVV</label>
            <input type="text" id="cvv" className="block w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" value={cardCvv} onChange={(e)=>setCardCvv(e.target.value)} />
          </div>
        </div>
      </form>
          <button onClick={handleConfirmOrdre} className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
            Confirm Order Payment
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className='absolute top-[240px] right-[90px]'>
    <CartProduct />
  </div>
</>

    

      )}

{currentStep === 3 && (
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">Passer la commande</h2>
    <button 
      onClick={handleSubmit}
      className="w-full bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 focus:outline-none focus:ring focus:border-blue-500"
    >
      Passer la commande
    </button>
  </div>
)}

    </div>
    </>
  );
};

export default Paiment;
