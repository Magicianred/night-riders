using NightRiders.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NightRiders.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
