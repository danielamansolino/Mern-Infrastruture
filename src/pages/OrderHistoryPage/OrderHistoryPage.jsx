import { checkToken } from '../../utilities/users-service'
export default function OrderHistoryPage() {

    async function handleCheckToken() {
      const expDate = await checkToken();
      console.log('this is expDate in handleCheckToken Order History Page', expDate);
    }
    return (
      <>
        <h1>OrderHistoryPage</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </>
    );
  }