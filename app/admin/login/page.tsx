import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import LoginForm from '@/components/admin/LoginForm';

export default async function LoginPage() {
  const authenticated = await isAuthenticated();
  
  if (authenticated) {
    redirect('/admin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-muted-foreground">Access your portfolio dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}