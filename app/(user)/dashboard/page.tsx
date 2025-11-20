"use client";

import UserInfoCard from "@/components/dashboard/user-info-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";

const UserDashboard = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 p-2">
      <UserInfoCard user={user} />

      {/* current module card  */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Card>
          <CardContent>
            <div className="w-full flex items-center justify-between">
              <h2>
                Current Module: <span>Tense</span>
              </h2>
              <Button size={"sm"} className="bg-primary text-background">Continue</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="w-full flex items-center justify-between">
              <h2>
                Upcoming Module: <span>Rabit and Cock Fairy Story</span>
              </h2>{" "}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* stat card  */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <div>
              <h1>
                Current Course Outline: <span>Academic</span>
              </h1>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div>
              <h1>
                Total Words Learned: <span>500</span>
              </h1>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
