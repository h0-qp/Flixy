export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">تسجيل الدخول إلى Flixy</h1>
        <form className="space-y-4">
          <input type="email" placeholder="البريد الإلكتروني" className="w-full p-2 rounded bg-gray-700 focus:outline-none" />
          <input type="password" placeholder="كلمة المرور" className="w-full p-2 rounded bg-gray-700 focus:outline-none" />
          <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-500">تسجيل الدخول</button>
        </form>
      </div>
    </div>
  )
}
