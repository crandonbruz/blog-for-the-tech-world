async function newForm() {
  preventDefault();
  const title = document.querySelector('input[name="new-title]').value;
  const content = document.querySelector('input[name="content"]').value;

  const result = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (result.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(result.statusText);
  }
}

document.querySelector("new-post-form").addEventListener("submit", newForm);
