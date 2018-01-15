namespace PasalDotCom.Models.User
{
    // The user DTO is a data transfer object used send selected user data to and from the users api end points.

    // It doesn't contain the PasswordHash and PasswordSalt fields of the user entity class 
    //so these fields aren't included in responses from the web api when the controller maps data from user entities to user dtos.

    // The Password property in the DTO is only used for model binding data coming into the controller from http requests 
    //(e.g. authenticate, register etc), passwords are never included in responses from the web api.
    //Some developers might prefer to have two DTOs in this case, 
    //one for incoming requests that includes a password and another for responses without a password, 
    //but I prefer to have less code where possible for maintainability.
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}