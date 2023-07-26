import BreadCrumb from "../components/BreadCrumb"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserOrders } from "../features/user/userSlice"

function Orders() {
  const dispatch = useDispatch()

  // ** RTK - User Orders state
  const userOrdersState = useSelector((state: any) => state.auth.userOrders)

  // **
  useEffect(() => {
    // @ts-ignore
    dispatch(getUserOrders())
  }, [])

  return (
    <>
      <main className="h-full">
        <div className="flex items-center justify-center">
          <BreadCrumb path="/orders" title="My Orders" />
        </div>

        <div className="text-center bg-white h-full min-h-[450px] py-6">
          <div className="container mb-20">
            <div>
              <div className="grid grid-cols-4 mb-10 text-gray/[.8] text-sm">
                <div className="col-span-1">
                  <h3>Order ID</h3>
                </div>
                <div className="">
                  <h3>Total Amount</h3>
                </div>
                <div className="">
                  <h3>Total Amount after discount</h3>
                </div>
                <div className="">
                  <h3>Status</h3>
                </div>
              </div>

              <div>
                {!userOrdersState && (
                  <h1 className="text-xl text-center font-semibold text-secondary">
                    You have no Orders
                  </h1>
                )}
              </div>

              <div>
                {userOrdersState &&
                  userOrdersState.map(
                    (order: any, index: React.Key | null | undefined) => (
                      <div className="mb-6 border-b-[1px]" key={index}>
                        <div className="grid grid-cols-4 mb-6 text-black text-sm">
                          <div>
                            <p>{order?._id}</p>
                          </div>
                          <div>
                            <p>${order?.paymentInfos.totalPrice}</p>
                          </div>
                          <div>
                            <p>
                              ${order?.paymentInfos.totalPriceAfterDiscount}
                            </p>
                          </div>
                          <div
                            className={`${
                              order?.paymentInfos.orderStatus
                                ? "text-green-500"
                                : ""
                            }`}
                          >
                            <p>{order?.paymentInfos.orderStatus}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 text-black mb-2 font-bold text-xs italic">
                          <div>
                            <p>Product Name</p>
                          </div>
                          <div>
                            <p>Quantity</p>
                          </div>
                          <div>
                            <p>Price</p>
                          </div>
                          <div>
                            <p>Color</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-4 text-black mb-10 text-xs italic font-light">
                          <div>
                            <p>{order?.orderItems[0]?.product.title}</p>
                          </div>
                          <div>
                            <p>{order?.orderItems[0]?.product.quantity}</p>
                          </div>
                          <div>
                            <p>{order?.orderItems[0]?.product.price}</p>
                          </div>
                          <div className="text-center mx-auto">
                            <div
                              className={`w-fit p-3 rounded-full cursor-pointer text-center`}
                              style={{
                                backgroundColor:
                                  order?.orderItems[0]?.color.title,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Orders
