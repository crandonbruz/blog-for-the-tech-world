const deleteForm = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/posts/${id}", {
    method: "DELETE",
    body: JSON.stringify({ post_id: id }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the dashboard page
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document.querySelector(".delete-btn").addEventListener("submit", deleteForm);
