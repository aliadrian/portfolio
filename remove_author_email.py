def commit_callback(commit):
    # Print each commit email for debugging
    print(f"Processing commit: {commit.author_email.decode()}")
    
    # Skip commits with specific email
    if commit.author_email.strip() == b"h22alian@du.se":
        commit.skip()
