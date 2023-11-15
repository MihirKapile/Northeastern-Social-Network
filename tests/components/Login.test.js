import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../../components/Login";
import { signIn } from 'next-auth/react'



jest.mock('next-auth/react', () => ({
    signIn: jest.fn(),
}));


beforeEach(() => {
    render(<Login />);
});


test('renders Login component without crashing', () => {
    expect(screen.getByText("Sign in with Northeastern Account")).toBeInTheDocument();
    expect(screen.getByText("Guest? Sign in with Google")).toBeInTheDocument();
});


test('renders Northeastern University logo with correct properties', () => {
    const image = screen.getByAltText('Northeastern University');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/_next/image?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6f%2FNortheastern_seal.svg%2F1200px-Northeastern_seal.svg.png&w=640&q=75');
    expect(image).toHaveAttribute('height', '240');
    expect(image).toHaveAttribute('width', '240');
});


test('calls signIn with azure-ad when Northeastern Account button is clicked', () => {
    const northeasternButton = screen.getByText("Sign in with Northeastern Account");
    fireEvent.click(northeasternButton);
    expect(signIn).toHaveBeenCalledWith('azure-ad');
});


test('calls signIn with google when Google sign-in button is clicked', () => {
    const googleButton = screen.getByText("Guest? Sign in with Google");
    fireEvent.click(googleButton);
    expect(signIn).toHaveBeenCalledWith('google');
});


test('Northeastern Account sign-in button has correct styling', () => {
    const northeasternButton = screen.getByText(/Sign in with Northeastern Account/i);
    expect(northeasternButton).toHaveStyle('width: 460px');
    expect(northeasternButton).toHaveStyle('display: flex');
});