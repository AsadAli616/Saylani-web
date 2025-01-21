export async function Login(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signIn`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  res = res.json();
  return res;

  // json();
}
export async function signUp(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/signUp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  res = res.json();
  return res;

  // json();
}

export async function findRequest() {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/findRequest`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  res = res.json();
  return res;
}
export async function branch() {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allbranch`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  res = res.json();
  return res;
}
export async function Accept(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/accpet`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  res = res.json();
  return res;

  // json();
}
export async function DeletNotification(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reject`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  res = res.json();
  return res;

  // json();
}
export async function branchFInd(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/findbranch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
export async function CreateBranch(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createMeal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
export async function findMeal(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/findMeal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
export async function findLunch(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/findLunch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
export async function createLunch(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createLunch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}

export async function createBrunch(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createBrunch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
export async function findBruch(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/findBrunch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
export async function findDinner(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/findDinner`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
// findDinner;
export async function createDinner(obj) {
  let res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/createDinner`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  res = res.json();
  return res;
}
