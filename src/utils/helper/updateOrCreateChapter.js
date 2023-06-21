export const handleUpdateOrCreateChapter = async ({
  createNewChapter,
  values,
  id,
  data,
  link_url,
  postRequest,
  updateRequest,
}) => {
  if (createNewChapter) {
    await postRequest(`/api/v1/admin/module?id=${id}`, {
      ...values,
      video: link_url,
    });
  }

  await updateRequest(`/api/v1/admin/module?id=${data.id}`, {
    ...values,
    video: link_url,
  });
};
