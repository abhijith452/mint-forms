
import axios from 'axios';
import Loader from '../../../ui-component/loader';
import { useEffect, useState } from 'react';
import Error from '../../../ui-component/error';
import loadScript from '../../../utils/razorpayScript';
import { useRouter } from 'next/router'



export default function CompletePayment() {
    
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [paymentSus, setPaymentSus] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);


    useEffect(() => {
        async function getData() {
            try {
                var data = await axios.get(`/api/pay/razorpay/orderDetails?orderId=${router.query.orderId}&formId=${router.query.formId}`)
                console.log(data)
                if (data.data.status !== "paid") {
                    displayRazorpay(data.data, data.data.userDetails)
                }
                else {
                    setPaymentSus(true)
                }
                // displayRazorpay()

            }
            catch (err) {
                setError(true)
                setErrorMsg(err.response !== undefined ? err.response.data.error : err)
                setLoading(false);
            }
        }
        if(router.query.orderId!==undefined){
            getData()
        }
    }, [router.query.orderId])


    async function displayRazorpay(data, values) {
        console.log(values)
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const options = {
            key: data.key,
            currency: data.currency,
            amount: String(data.amount),
            order_id: data.id,
            name: 'IEEE Job Fair 2022',
            description: 'Thank you for registering',

            handler: async (response) => {
                try {
                    await axios.post(`/api/pay/razorpay/verify?formId=${router.query.formId}&orderId=${response.razorpay_order_id}`, response)
                    router.push(`/confirmation/${router.query.formId}/${response.razorpay_order_id}`)
                } catch (err) {
                    setError(true)
                    setErrorMsg(err.response !== undefined ? err.response.data.error : err)
                    setLoading(false);
                }

            },
            prefill: {
                name: `${values.name}`,
                email: values.email,
                contact: `+91${values.phone}`
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        paymentObject.on('payment.failed', async (response) => {

            try {
                await axios.post(`/api/pay/razorpay/failed?formId=${router.query.formId}`, response.error)
                router.push(`/confirmation/${router.query.formId}/${response.error.metadata.order_id}`)
                paymentObject.close()
            } catch (err) {
                setError(true)
                setErrorMsg(err.response !== undefined ? err.response.data.error : err)
                setLoading(false);
            }
        });
    }


    return (
        <div >
            {error ? <Error setError={setError} msg={errorMsg} /> : null}
            {loading ?

                <>
                    <Loader msg="Don&apos;t refresh this page. Redirecting to payment processing service ..." />

                </>
                : null}
            {paymentSus ? <div style={{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
                {/* <img src={src} alt="celebrate"/> */}
                <p>Payment already made</p>

            </div>
                : null}

        </div>


    )
}
