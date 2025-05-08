import { RestauresServicesClient } from "./restauresServices.ts";
export const options = {
  vus: 100,               // Number of users hitting your API at same time
  duration: '1m',        // Total time to run test (2 minutes)
};
const baseUrl = "http://192.168.29.71:4000";
const restauresServicesClient = new RestauresServicesClient({
  baseUrl
});

export default function () {
  let postApiCustomerLoginBody,
    postApiCustomerRegisterBody,
    postApiUploadFileBody,
    postApiRefreshBody,
    postApiRestaurantRegisterBody,
    postApiRestaurantLoginBody,
    postApiRestaurantMenuBody,
    id,
    restaurantId,
    postApiCustomerEnquiryBody,
    putApiRestaurantEnquiryStatusIdBody,
    putApiCustomerMenuRateIdBody;

  /**
   * Login Customer
   */
  postApiCustomerLoginBody = {
    email: "user@example.com",
    password: "string",
  };

  const postApiCustomerLoginResponseData =
    restauresServicesClient.postApiCustomerLogin(postApiCustomerLoginBody);

  /**
   * Register Customer
   */
  // postApiCustomerRegisterBody = {
  //   firstName: "justly",
  //   lastName: "aside",
  //   email: "calmly",
  //   phoneNumber: "er",
  //   password: "hourly",
  //   profilePicture: "owlishly",
  // };

  // const postApiCustomerRegisterResponseData =
  //   restauresServicesClient.postApiCustomerRegister(
  //     postApiCustomerRegisterBody,
  //   );

  /**
   * allocate restaurant
   */
  // postApiUploadFileBody = {
  //   file: "defenseless",
  //   files: [],
  //   filePath: "scary",
  //   metadata: "ugh",
  //   fileName: "as",
  //   contentType: "countess",
  // };

  // const postApiUploadFileResponseData =
  //   restauresServicesClient.postApiUploadFile(postApiUploadFileBody);

  /**
   * Login
  //  */
  // postApiRefreshBody = {
  //   refresh_token:
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRkZjA5YTRjMWU3ZjAwMWY1YTZjMWQiLCJwaG9uZV9udW1iZXIiOiI5ODU3MjEwMzQ1IiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNjMwNjIwMzI4LCJleHAiOjE2MzIyMjIzMjgsInN1YiI6InNhbWVlciJ9.5yV5kqg3n7e9H2ZQg1E4y9Vr2P6c0Q3e9Qc6k9H2ZQg",
  // };

  // const postApiRefreshResponseData =
  //   restauresServicesClient.postApiRefresh(postApiRefreshBody);

  // /**
  //  * Register Restaurant
  //  */
  // postApiRestaurantRegisterBody = {
  //   name: "Spice Garden",
  //   managementPhone: "9123456789",
  //   restaurantEmail: "contact@spicegarden.in",
  //   location: {
  //     address: "123 MG Road",
  //     city: "Bengaluru",
  //     state: "Karnataka",
  //     zipCode: "560001",
  //     country: "India",
  //     latitude: "12.9716",
  //     longitude: "77.5946",
  //   },
  //   workingDays: [],
  //   images:
  //     "https://imgs.search.brave.com/TCg2-DrIqlJ2uEbMMFRhjg2eJssXutF3qI4AsNevg6Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/MzgwODA1L3Bob3Rv/L2V1cm9wZWFuLXJl/c3RhdXJhbnQtaW4t/YnJpZ2h0LWNvbG9y/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WmhmSVZNclZH/NFAwcTVVNU9QOW0z/eUMxT3BiRWRFNzF5/WnBJNnp5c0NuVT0",
  //   owner: {
  //     name: "Kunal Jain",
  //     phone: "9057508437",
  //     email: "kunal@example.com",
  //   },
  //   panNumber: "ABCDE1234F",
  //   gstinNumber: "29ABCDE1234F1Z5",
  //   bankDetails: {
  //     ifsc: "SBIN0001234",
  //     accountNumber: "123456789012",
  //   },
  //   fssaiRegistrationNumber: "11519021000243",
  //   password: "securePassword123",
  // };

  // const postApiRestaurantRegisterResponseData =
  //   restauresServicesClient.postApiRestaurantRegister(
  //     postApiRestaurantRegisterBody,
  //   );

  // /**
  //  * Login Restaurant
  //  */
  postApiRestaurantLoginBody = {
    email: "contact@spicegarden.in",
    password: "securePassword123",
  };

  const postApiRestaurantLoginResponseData =
    restauresServicesClient.postApiRestaurantLogin(postApiRestaurantLoginBody);

  // /**
  //  * Add Menu
  //  */
  // postApiRestaurantMenuBody = {
  //   name: "Paneer Tikka",
  //   description:
  //     "A delicious starter made from marinated paneer grilled to perfection.",
  //   images: "https://example.com/paneer-tikka.jpg",
  //   price: "250",
  //   timeToPrepare: "20",
  //   category: "Starter",
  // };

  // const postApiRestaurantMenuResponseData =
  //   restauresServicesClient.postApiRestaurantMenu(postApiRestaurantMenuBody);

  /**
   * Get Menu
   */

  const getApiMenuResponseData = restauresServicesClient.getApiMenu({
    headers: {
      Authorization: `Bearer ${postApiCustomerLoginResponseData.data['data']['access_token']}`,
    }
  });

  /**
   * Get Menu By Id
   */
  id = "67c231e2e3227fd83a9a0e66";

  const getApiMenuIdResponseData = restauresServicesClient.getApiMenuId(id, {
    headers: {
      Authorization: `Bearer ${postApiCustomerLoginResponseData.data['data']['access_token']}`,
    }
  });

  /**
   * Get Menu By Restaurant Id
   */
  restaurantId = "671920f1775b78863b82025f";

  const getApiMenuRestaurantRestaurantIdResponseData =
    restauresServicesClient.getApiMenuRestaurantRestaurantId(restaurantId, {
      headers: {
        Authorization: `Bearer ${postApiCustomerLoginResponseData.data['data']['access_token']}`,
      }
    });

  /**
   * Get Restaurant
   */

  const getApiCustomerRestaurantResponseData =
    restauresServicesClient.getApiCustomerRestaurant({
      headers: {
        Authorization: `Bearer ${postApiCustomerLoginResponseData.data['data']['access_token']}`,
      }
    });

  /**
   * Get Restaurant By Id
   */
  id = "671920f1775b78863b82025f";

  const getApiCustomerRestaurantIdResponseData =
    restauresServicesClient.getApiCustomerRestaurantId(id, {
      headers: {
        Authorization: `Bearer ${postApiCustomerLoginResponseData.data['data']['access_token']}`,
      }
    });

  /**
   * Add Favorite Restaurant
   */
  // restaurantId = "dearly";

  // const putApiCustomerFavoriteRestaurantRestaurantIdResponseData =
  //   restauresServicesClient.putApiCustomerFavoriteRestaurantRestaurantId(
  //     restaurantId,
  //   );

  /**
   * Delete Favorite Restaurant
   */
  // restaurantId = "needily";

  // const deleteApiCustomerFavoriteRestaurantRestaurantIdResponseData =
  //   restauresServicesClient.deleteApiCustomerFavoriteRestaurantRestaurantId(
  //     restaurantId,
  //   );

  /**
   * Get Favorite Restaurants
   */

  const getApiCustomerFavoriteRestaurantResponseData =
    restauresServicesClient.getApiCustomerFavoriteRestaurant({
      headers: {
        Authorization: `Bearer ${postApiCustomerLoginResponseData.data['data']['access_token']}`,
      }
    });

  /**
   * Add Enquiry
   */
  // postApiCustomerEnquiryBody = {
  //   menuId: "60f7d8d6c6d1b7c6e0f0d6f1",
  //   quantity: "2",
  //   totalPrice: "500",
  // };

  // const postApiCustomerEnquiryResponseData =
  //   restauresServicesClient.postApiCustomerEnquiry(postApiCustomerEnquiryBody);

  /**
   * Get Enquiries
   */

  const getApiCustomerEnquiryResponseData =
    restauresServicesClient.getApiCustomerEnquiry({
      headers: {
        Authorization: `Bearer ${postApiCustomerLoginResponseData.data['data']['access_token']}`,
      }
    });

  /**
   * Get Enquiries
   */

  const getApiRestaurantEnquiryResponseData =
    restauresServicesClient.getApiRestaurantEnquiry({
      headers: {
        Authorization: `Bearer ${postApiRestaurantLoginResponseData.data['data']['access_token']}`,
      }
    });

  /**
   * Update Enquiry Status
   */
  // id = "yum";
  // putApiRestaurantEnquiryStatusIdBody = {
  //   status: "Accepted",
  //   timeToPrepare: "20",
  // };

  // const putApiRestaurantEnquiryStatusIdResponseData =
  //   restauresServicesClient.putApiRestaurantEnquiryStatusId(
  //     id,
  //     putApiRestaurantEnquiryStatusIdBody,
  //   );

  /**
   * Rate Enquiry
   */
  // id = "upbeat";
  // putApiCustomerMenuRateIdBody = {
  //   rating: "5",
  // };

  // const putApiCustomerMenuRateIdResponseData =
  //   restauresServicesClient.putApiCustomerMenuRateId(
  //     id,
  //     putApiCustomerMenuRateIdBody,
  //   );
}
