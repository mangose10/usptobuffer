import atlas_connect

role = atlas_connect.checkUserRole("leonar98@yahoo.com", "Leonardo Rodriguez")
res = "{ \"express\": \"" + role + "\" }"
print(res)
