const editForm = async (event) => {
  event.preventDefault();
  const title = document.querySelector('input[name="new-title"]').value.trim();
  const content = document.querySelector('input[name="content"]').value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/posts/${id}", {
    method: "PUT",
    body: JSON.stringify({ post_id: id, title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the dashboard page
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".edit-form").addEventListener("submit", editForm);
