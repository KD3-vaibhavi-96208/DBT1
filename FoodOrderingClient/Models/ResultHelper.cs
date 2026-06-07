using Microsoft.AspNetCore.Mvc.ApiExplorer;

namespace FoodOrderingClient.Models
{
    public class ApiResult<T>
    {
        public string Status {  get; set; }
        public T Data { get; set; }

        public string Error { get; set; }
    }

    public static  class ResultHelper
    {
        //SuccessResult Data
        public static ApiResult<T> Success<T>(T data)
        {
            return new ApiResult<T>
            {
                Status = "success",
                Data = data,
                Error = null,
            };
        }

        //ErrorResult Data
        public static ApiResult<T> Error<T>(string error)
        {
            return new ApiResult<T>
            {
                Status = "error",
                Data = default,
                Error = error,
            };
        }
    }

    
}
