/* import React, { useState } from "react";
import { toast } from "react-toastify";
import { produitsSelectionners } from "../../redux/features/cart/Cart";
import { useCreateOrdreItemsMutation } from "../../redux/api/oredreItemsApiSlice";
export default function AddOrdreItems({ id_ordre }) {
    const products = produitsSelectionners; 
  
    const [createOrdreItems] = useCreateOrdreItemsMutation(); 
  
    const createOrderItems = async () => {
      try {
        const orderItems = products.map((product) => ({
          id_product: product.id,
          id_ordre: id_ordre,
          quantity: product.quantity,
          price: product.price,
          total_items_price: product.quantity * product.price,
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
  
    return { createOrderItems }; 
  }
   */