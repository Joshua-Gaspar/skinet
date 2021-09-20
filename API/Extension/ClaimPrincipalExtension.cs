using System.Security.Claims;
// ///// Delete Filed "Pending"
namespace API.Extension
{
    public static class ClaimPrincipalExtension
    {

        public static string RetrieveEmailFromPrincipal(this ClaimsPrincipal user){
            return user.FindFirstValue(ClaimTypes.Email);

        }
        
    }
}