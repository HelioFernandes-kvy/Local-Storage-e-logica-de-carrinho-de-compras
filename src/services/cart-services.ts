import { OrderDTO } from "../models/order";
import * as cartRepository from '../localstorege/cart-repository'

export function saveCart(cart: OrderDTO) {
   cartRepository.save(cart)
}