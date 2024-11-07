import { MaxWidthWrapper } from '@/components/max-width-wrapper';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
export const Navbar = () => {
    const user = false
    return <nav className={`sticky z-[100] h-16 inset-x-0 top-0 w-full border-b 
    border-gray-200 backdrop-blur-lg transition-all bg-white/80`}>
        <MaxWidthWrapper>
            <div className='flex h-16 items-center justify-between'>
                <Link href={"/"} className='flex z-40 font-semibold'>
                    Move<span className='text-brand-700'>Pine</span>
                </Link>
                <div className='h-full flex items-center space-x-4'>
                    {
                        user ? <>
                            <SignOutButton>
                                <Button variant={'ghost'} size={'sm'}>Sign out</Button>
                            </SignOutButton>

                            <Link
                                className={buttonVariants({
                                    size: 'sm',
                                    className: "hidden sm:flex items-center gap-1"
                                })}
                                href={'/dashboard'}
                            >
                                Dashboard <ArrowRightIcon className='ml-1.5 size-4' />
                            </Link>
                        </> : <>
                            <Link
                                href="/pricing"
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                })}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/sign-in"
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                })}
                            >
                                Sign in
                            </Link>
                            <div className="h-8 w-px bg-gray-200" />

                            <Link
                                href="/sign-up"
                                className={buttonVariants({
                                    size: "sm",
                                    className: "flex items-center gap-1.5",
                                })}
                            >
                                Sign up <ArrowRightIcon className="size-4" />
                            </Link>
                        </>
                    }
                </div>
            </div>
        </MaxWidthWrapper>
    </nav >
}