import { Models } from "appwrite";
import { GridPostList, Loader } from "@/components/shared";
import { useGetCurrentUser } from "@/lib/react-query/queries";

const Saved = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();

  // Safeguard: Ensure currentUser and currentUser.save are available
  const savePosts = currentUser?.save && Array.isArray(currentUser.save)
    ? currentUser.save
        .map((savePost: Models.Document) => ({
          ...savePost.post,
          creator: {
            imageUrl: currentUser.imageUrl,
          },
        }))
        .reverse()
    : [];

  return (
    <div className="saved-container">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/assets/icons/save.svg"
          width={36}
          height={36}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full">Booked Hostels</h2>
      </div>

      {/* Check for loading or missing currentUser */}
      {isLoading ? (
        <Loader />
      ) : !currentUser ? (
        <p className="text-light-4">User not found</p>
      ) : (
        <ul className="w-full flex justify-center max-w-5xl gap-9">
          {savePosts.length === 0 ? (
            <p className="text-light-4">You Have'nt Booked a Hostel</p>
          ) : (
            <GridPostList posts={savePosts} showStats={false} />
          )}
        </ul>
      )}
    </div>
  );
};

export default Saved;
