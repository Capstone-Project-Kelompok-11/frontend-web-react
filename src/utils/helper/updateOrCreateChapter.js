import useHTTP from "../hooks/useHTTP";
const { postRequest, updateRequest } = useHTTP();
export const handleUpdateOrCreateChapter = async ({
  createNewChapter,
  values,
  id,
  data,
  link_url,
}) => {
  const fetchData = createNewChapter
    ? postRequest(`/api/v1/admin/module?id=${id}`, {
        ...values,
        video: link_url,
      })
    : updateRequest(`/api/v1/admin/module?id=${data.id}`, {
        ...values,
        video: link_url,
      });
  await fetchData;
  return fetchData;
};
