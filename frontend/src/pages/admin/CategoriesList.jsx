import { toast } from "react-toastify";
import moment from "moment";
import {
  useGetAllCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "../../redux/api/categoryApiSlice.js";
import { useEffect, useState } from "react";
import { FaSave, FaTrash, FaUserEdit } from "react-icons/fa";

const CategoriesList = () => {
  const { data: Categories, refetch } = useGetAllCategoriesQuery();
  const [createCategory] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();

  const [editable, setEditable] = useState(false);

  const [idEdited, setIdEdited] = useState(null);
  const [nameEdited, setNameEdited] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    refetch();
  }, [refetch]);

  const handleCreate = async () => {
    try {
      const res = await createCategory({ name }).unwrap();
      if (res.error) {
        return toast.error("error creating category, Try again");
      }
      setName("");
      toast.success("category created successfully");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (confirm(`Are you sure you want to delete `)) {
        await deleteCategory(id).unwrap();
        refetch();
      }
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await updateCategory({
        id: id,
        updatedCategory: { name: nameEdited },
      }).unwrap();

      toast.success("Category updated successfully");
      setIdEdited(null);
      setNameEdited("");
      refetch();
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-medium mb-6">Categories</h2>
      <div className=" my-10 flex">
        <input
          type="text"
          placeholder="create new category"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 mr-2 rounded-md w-full outline-none bg-gray-50"
        />
        <button
          className="bg-black text-white w-[200px] rounded hover:bg-gray-800 "
          onClick={handleCreate}
        >
          Create Category
        </button>
      </div>
      <div className="h-[430px] overflow-hidden overflow-y-scroll">
        <table className="w-full">
          <thead className="text-gray-700 my-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                Category No
              </td>
              <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                Category Name
              </td>
              <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                Date Created
              </td>
              <td className="font-semibold text-gray-600 text-[20px] px-4 py-2 text-left">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {Categories?.map((category) => (
              <tr
                key={category._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 even:bg-gray-50 even:dark:bg-gray-800"
              >
                <td
                  className="font-semibold px-4 py-2 text-left text-gray-500"
                  title={category._id}
                >
                  #{category._id.slice(0, 10)}...
                </td>

                <td className="font-semibold px-4 py-2 text-left w-[400px] focus-within:shadow-lg ">
                  {idEdited === category._id && editable ? (
                    <input
                      type="text"
                      value={nameEdited}
                      onChange={(e) => setNameEdited(e.target.value)}
                      className="bg-transparent outline-none pl-2 text-gray-600"
                    />
                  ) : (
                    category.name
                  )}
                </td>

                <td
                  className="font-semibold px-4 py-2 text-left"
                  title={category.createdAt}
                >
                  {moment(category.createdAt).fromNow()}
                </td>

                <td className="font-semibold px-4 py-2 text-left">
                  <div className="flex">
                    {editable && idEdited === category._id ? (
                      <FaSave
                        className="mx-3 cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => {
                          handleUpdate(category._id);
                          setEditable(false);
                        }}
                        title="save changes"
                      />
                    ) : (
                      <FaUserEdit
                        className="mx-3 cursor-pointer text-gray-500 hover:text-black"
                        onClick={() => {
                          setIdEdited(category._id);
                          setEditable(true);
                          setNameEdited(category.name);
                        }}
                        title="Change category Name"
                      />
                    )}
                    {!category.isAdmin ? (
                      <FaTrash
                        className="cursor-pointer text-gray-500 hover:text-red-600"
                        onClick={() => {
                          handleDelete(category._id);
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesList;
