import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody {
    name: string;
    email: string;
    photo: string;
    gender: string;
    _id: string;
    dob: Date;
}


export interface NewProductRequestBody {
    name: string;
    category: string;
    price: number;
    stock: number;
}

export type ControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | Response<any, Record<string, any>>>;


export type SearchRequestQuery = {
    search? :string,
    price? :string,
    category? :string,
    sort? :string,
    page? :string,

} 

export interface BaseQuery {
    name?: {
      $regex: string;
      $options: string;
    };
    price?: { $lte: number };
    category?: string;
}


export type InvalidateCacheProps = {
    product?:boolean;
    order?:boolean;
    admin?:boolean;
    userId?: string;
    orderId?: string;
    productId?: string | string[];

}


export type OrderItemType = {
    name: string;
    photo: string;
    price: number;
    quantity: number;
    productId: string;
}

export type deliveryInfo = {
  adress: string;
  city: string;
  state: string;
  country: string;
  pinCode: Number;  
}



export interface NewOrderRequestBody {
    deliveryInfo:{};
    user: string;
    subtotal: number;
    tax: number;
    discount: number;
    deliveryCharges: number;
    total: number;
    orderItems : OrderItemType[];


}